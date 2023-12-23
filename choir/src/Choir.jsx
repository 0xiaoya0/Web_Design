import ImageCarousel from './ImageCarousel';
import './Choir.css';

function Choir() {
    const choirs = [
      {
          id: 1,
          name: "King's College Choir",
          history: "The King's College Choir, founded in 1441 by King Henry VI, is known for its distinctively English choir sound. It comprises students from King's College, Cambridge University.",
          achievements: "The choir is internationally acclaimed for its broadcast of the Festival of Nine Lessons and Carols during Christmas, a tradition since 1918.",
          notablePerformances: "Apart from regular performances at King's College Chapel in Cambridge, the choir has toured across Europe, the US, and Asia.",
          website: "https://www.kings.cam.ac.uk/choir"
      },
      {
        id: 2,
        name: "Vienna Boys' Choir",
        history: "Founded in 1498, the Vienna Boys' Choir is one of the oldest boys' choirs globally and a symbol of Austria's rich musical heritage. The choir is composed of talented young singers from all over the world.",
        achievements: "Known for their angelic voices and wide-ranging repertoire, the choir has performed in numerous countries and collaborated with esteemed orchestras.",
        notablePerformances: "The choir is famous for its traditional New Year's Concert of the Vienna Philharmonic and performances at the Vienna State Opera.",
        website: "https://www.wienersaengerknaben.at/en"
      },
      {
          id: 3,
          name: "Berlin Radio Choir",
          history: "The Berlin Radio Choir, with its rich tradition, is a leading ensemble celebrated for its versatility across various musical genres, from classical to contemporary.",
          achievements: "The choir is renowned for its collaborations with world-renowned orchestras and conductors, bringing innovative interpretations to choral works.",
          notablePerformances: "Notable for its performances at the Berlin Philharmonic, the choir has also made several notable recordings of classical and contemporary works.",
          website: "https://www.rundfunkchor-berlin.de/en/"
      },
      {
          id: 4,
          name: "New York Philharmonic Choir",
          history: "Associated with the New York Philharmonic, this choir is esteemed for its expansive repertoire, ranging from classical masterpieces to contemporary compositions.",
          achievements: "The choir is known for its performances at the prestigious Lincoln Center and collaborations with many of the world's most eminent composers and conductors.",
          notablePerformances: "Regularly premiering major works, the choir is an integral part of the New York Philharmonic's annual performances at David Geffen Hall.",
          website: "https://nyphil.org/"
      }
    ];

    return (
        <div className="chorus-page">
            <ImageCarousel/>
            <div id="main" className="choir__profile">
              {choirs.map((choir) => (
                  <div key={choir.id} className="choir__card">
                      <h2 className="choir__name">{choir.name}</h2>
                      <p className="choir__history">{choir.history}</p>
                      <p className="choir__achievements">{choir.achievements}</p>
                      <p className="choir__notable">{choir.notablePerformances}</p>
                      <a href={choir.website} target="_blank" rel="noopener noreferrer" className="choir__button">Visit Website</a>
                  </div>
                ))}
            </div>      
        </div>
    );
}

export default Choir;
