import { useState, useRef, useEffect} from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import MainView from '../components/MainView'
import Sidebar from '../components/Sidebar'
import WidthIndicator from '../components/WidthIndicator';

const Home: NextPage = () => {
  const [sidebarWidth, setSidebarWidth] = useState('300px');
  const refWidthResizer = useRef(null);

  useEffect(() => {
    const resizableElement = refWidthResizer.current;
    if (resizableElement) {
      const styles = window.getComputedStyle(resizableElement);
      let width = parseInt(styles.width, 10);
      let x = 0;

      const onMouseMove = (event: any) => {
        const dx = event.clientX - x;
        x = event.clientX;
        width = width + dx;
        resizableElement.style.width = `${width}px`;
      }

      const onMouseUp = (event: any) => {
        document.removeEventListener("mousemove", onMouseMove);
      }

      const onMouseDown = (event: any) => {
        resizableElement.style.left = styles.left;
        resizableElement.style.right = null;
        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseup", onMouseUp)
      }

      const rightResizer = refWidthResizer.current;
      rightResizer.addEventListener("mousedown", onMouseDown);

      return () => {
        rightResizer.removeEventListener("mousedown", onMouseDown);
      };
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Thing Web Clone</title>
        <meta name="description" content="Web app version of popular to-do app named Things" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: 'grid', gridTemplateColumns: `auto 1fr` ,height: '100vh'}}>
        <div ref={refWidthResizer} style={{ minWidth: '300px', maxWidth: '800px' }}><Sidebar/></div>
        <MainView />
      </main>
    </div>
  )
}

export default Home
