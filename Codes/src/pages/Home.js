import Introduction from './Introduction';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Home = () => 
{
    return (
        <main>
            <Introduction />
            <About />
            <Portfolio />
            {/* <Contact /> */}
        </main>
    )
};

export default Home;