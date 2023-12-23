import './Piece.css';

function Piece() {
    const pieces = [
        {
            id: 1,
            image: "piece1.webp",
            era: "Renaissance Era",
            music: "Miserere mei, Deus",
            intro: "A sublime piece known for its ethereal beauty and complexity, Allegri's 'Miserere' is a cornerstone of Renaissance choral music.",
            composer: "Gregorio Allegri",
            composerBio: "An Italian priest and composer of the Roman School, Allegri is renowned for his liturgical music. His 'Miserere' remains one of the most evocative pieces of the Renaissance."
        },
        {
            id: 2,
            image: "piece2.jpeg",
            era: "Baroque Era",
            music: "Mass in B Minor",
            intro: "A monumental work, Bach's Mass in B Minor is a stunning example of Baroque vocal composition, showcasing intricate counterpoint and rich textures.",
            composer: "Johann Sebastian Bach",
            composerBio: "A prolific German composer and musician, Bach's contributions to the Baroque era include masterpieces that are celebrated for their technical depth and artistic beauty."
        },
        {
            id: 3,
            image: "piece3.jpeg",
            era: "Classical Era",
            music: "Requiem",
            intro: "Mozart's Requiem, left incomplete at his death, stands as a profound and moving work, brimming with emotional intensity and dramatic harmonies.",
            composer: "Wolfgang Amadeus Mozart",
            composerBio: "A prodigy from a young age, Mozart's extensive catalog spans symphonic, chamber, operatic, and choral music, solidifying his reputation as a master of classical form."
        },
        {
            id: 4,
            image: "piece4.jpeg",
            era: "Romantic Era",
            music: "Ein deutsches Requiem",
            intro: "Different from traditional Latin Requiems, Brahms' 'Ein deutsches Requiem' is a deeply personal work, reflecting a humanistic approach to comfort and sorrow.",
            composer: "Johannes Brahms",
            composerBio: "A leading figure of the Romantic era, Brahms was a German composer known for his deeply expressive style and innovative symphonic works."
        },
        {
            id: 5,
            image: "piece5.jpeg",
            era: "Contemporary Era",
            music: "Lux Aeterna",
            intro: "A luminous and serene composition, 'Lux Aeterna' is celebrated for its beautiful harmonic language and delicate choral textures.",
            composer: "Morten Lauridsen",
            composerBio: "An American composer, Lauridsen's works have become staples in the choral repertoire, known for their radiant harmonies and profound emotional depth."
        },
        {
            id: 6,
            image: "piece6.jpeg",
            era: "20th Century",
            music: "Carmina Burana",
            intro: "Carl Orff's 'Carmina Burana' is famed for its dynamic and expressive choral sections, based on medieval poems. Its opening and closing movement, 'O Fortuna', is particularly renowned.",
            composer: "Carl Orff",
            composerBio: "A German composer of the 20th century, Carl Orff is best known for his distinctive style in 'Carmina Burana'. His approach often involved using rhythmic patterns and percussive orchestration."
        }
    ];

    return (
        <>
        <div id="main" className="piece__introduction">
            <h2>Exploring Timeless Choral Masterpieces</h2>
            <p>Welcome to a world where melodies intertwine with history, and each composition tells a story. In this space, we celebrate the profound impact of choral music, traversing through eras that have shaped its course. From the intricate polyphony of the Renaissance to the bold expressions of the 20th century, each piece resonates with the timelessness of human emotion and creativity.</p>
            <p>As we journey through these masterpieces, we not only revisit the past but also glimpse the future, witnessing the evolution of choral music and its endless potential. These compositions are not just notes on a page; they are the heartbeat of centuries, the voice of humanity in harmony.</p>
            <p>Embark on this melodious exploration with us, and uncover the richness and diversity of choral music. Each piece is a gateway to another world, inviting you to immerse yourself in its beauty and complexity. The journey is limitless, and the music is waiting to be discovered.</p>
        </div>
        <div className="classic-pieces">
            {pieces.map(piece => (
                <div key={piece.id} className="classic-piece__card">
                    <img className="classic-piece__image" src={piece.image} alt={piece.music} />
                    <div className="classic-piece__info">
                        <h3 className="classic-piece__music">{piece.music}</h3>
                        <h4 className="classic-piece__era">{piece.era}</h4>
                        <p className="classic-piece__intro">{piece.intro}</p>
                        <h4 className="classic-piece__composer">{piece.composer}</h4>
                        <p className="classic-piece__bio">{piece.composerBio}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}
  
export default Piece;