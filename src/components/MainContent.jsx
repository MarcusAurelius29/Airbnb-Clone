import photoGrid from '../images/photo-grid.jfif';

function MainContent() {
    return (
        <section className='main-content'>
        <img src={photoGrid} alt='photoGrid' className='photo-grid'></img>
        <h2>Online Experiences</h2>
        <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}

export default MainContent