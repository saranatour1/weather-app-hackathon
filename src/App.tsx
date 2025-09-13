import '@fontsource-variable/dm-sans';
// Supports weights 200-800
import '@fontsource-variable/bricolage-grotesque';
import { UnitsDropDown } from './components/shared';


function App() {
  return (<main className='w-full flex items-start justify-start bg-neutral-900 max-w-full min-h-screen px-28 pt-12'>
    <section className='w-full'>
      <nav className='w-full flex items-center justify-between'>
        {/* Logo */}
        <img loading='lazy' src='./src/assets/logo.svg' className=''/>

        {/* The units Dropdown component */}
        <UnitsDropDown />
      </nav>
    </section>
  </main>)
}

export default App
