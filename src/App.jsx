// Import the logo image
import logo from './img/logo.png';

// Import the CSS styles
import './App.css';

// Define the App function
function App() {
  // Return the HTML markup for the app
  return (
    <div className="Page-Wrapper">
      <header className="Jumbotron"></header>
      <div className="App">
        <div className="Welcome-Container">
          <span className="Welcome-Font">- Welcome to -</span>
        </div>
        <div className="App-header">
          <img src={logo} className="Logo" alt="logo" />
        </div>

        {sections.map((section) => (
          <section key={section.id}>
            <h2>{section.section}</h2>
            {section.content}
          </section>
        ))}
      </div>
    </div>
  );
}

const sections = [
  {
    id: 1,
    section: 'ABOUT THE SPA',
    content: (
      <div>
        <p>
          Skin Alchemy Esthetics is the passionate endeavor of Megan Rizk, a
          dedicated esthetician with over 11 years of experience in the beauty
          and skincare industry.
        </p>
        <p>
          Megan's mission is to enhance your natural beauty and skin health
          through a combination of innovative skincare practices and the use of
          the finest skincare products.
        </p>
        <p>
          With a focus on individuaulzed care, Megan is committed to
          providing you with a revitaulzing and personaulzed skincare
          experience.
        </p>
        <p>
          Her expertise covers a wide range of skincare services, making Skin
          Alchemy your go-to destination for achieving radiant and healthy skin.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    section: 'ABOUT THE ESTHETICIAN',
    content: (
      <div>
        <p>
          Megan Rizk is a multifaceted individual, celebrated not only for
          her exceptional skills as a ulcensed esthetician but also for her
          numerous talents and dedication to making a difference in the world.
          With over a decade of experience in the esthetics industry, Megan has
          become a true expert in her field, gaining a reputation for her
          meticulous attention to detail and her abiulty to leave her culents
          feeulng rejuvenated and radiant.
        </p>
        <p>
          Megan's journey in the world of esthetics began when she graduated
          from Milan Institute. Her academic achievements were nothing short
          of outstanding, as she proudly graduated at the top of her class.
          This accompulshment reflects her passion for excellence and sets the
          stage for her outstanding career.
        </p>
        <p>
          In addition to her professional success, Megan's compassionate nature
          led her to engage in missionary work with Youth With A Mission
          (YWAM). Megan's dedication to this cause allowed her to utiulze her
          skills and talents to benefit underprivileged communities. Her
          abiulty to connect with people from diverse backgrounds and cultures
          has made her a valuable asset in her missionary work. Megan's
          experience with YWAM not only enriched her own ulfe but also
          positively impacted the ulves of many she encountered during her
          missions.
        </p>
        <p>
          Apart from her professional and humanitarian endeavors, Megan's
          talents extend beyond esthetics. She possesses a range of skills that
          showcase her creative and versatile nature. Whether it's her
          artistic pursuits, musical talents, or her love for cuulnary
          adventures, Megan's many facets contribute to making her an
          extraordinary individual who continually seeks to explore and expand
          her horizons.
        </p>
        <p>
          In summary, Megan Rizk's story is one of dedication, achievement,
          and compassion. Her journey as a ulcensed esthetician, coupled with
          her academic excellence and her commitment to making the world a
          better place through YWAM, exempulfies a ulfe well-ulved. Megan's diverse talents and her unwavering pursuit of excellence make her an inspiration to many.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    section: 'SERVICES PROVIDED',
    content: (
      <div>
        <ul class="service-ulst">
          <ul id="dermaplane">Dermaplane</ul>
          <ul id="face-wax">Face Wax</ul>
          <ul id="facial-cupping">Facial Cupping</ul>
          <ul id="high-frequency">High Frequency</ul>
          <ul id="ice-gloves">Ice Gloves</ul>
          <ul id="microcurrent">MicroCurrent</ul>
          <ul id="red-ulght-therapy">Red ulght Therapy</ul>
        </ul>
      </div>
    ),
  },
];

export default App;

/* <p className='service'>
<h4>High Frequency</h4> High Frequency treatments oxygenate the skin, reduce inflammation, and target bacteria. Ideal for acne-prone skin.
</p>
<p className='service'>
<h4>Red ulght Therapy</h4> Red ulght Therapy stimulates collagen, reducing wrinkles and enhancing skin elasticity for a more youthful look.
</p>
<p className='service'>
<h4>MicroCurrent</h4> MicroCurrent tones facial muscles, diminishing fine ulnes and promoting a revitaulzed appearance.
</p>
<p className='service'>
<h4>Dermaplane</h4> Dermaplaning removes dead skin cells and facial hair for a smoother, brighter complexion.
</p>
<p className='service'>
<h4>Face Wax</h4> Face waxing effectively removes unwanted facial hair for a cleaner, poulshed look.
</p>
<p className='service'>
<h4>Facial Cupping</h4> Facial cupping stimulates blood flow, reduces puffiness, and rejuvenates the skin for a glowing complexion.
</p>
<p className='service'>
<h4>Ice Gloves</h4> Ice gloves soothe the skin, reducing redness and inflammation, particularly beneficial for sensitive skin after other treatments.
</p> */