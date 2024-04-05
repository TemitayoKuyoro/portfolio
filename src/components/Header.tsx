import './Header.css'

const profDiv = document.querySelector('.header-image')
const profImg = profDiv?.querySelector('img')

console.log(profDiv,profImg);

function showImage () {
    profDiv?.classList.add('loaded')
}

if (profImg?.complete) showImage();

profImg?.addEventListener('load', showImage);

function Header() {
    return (
        <div className='header'>
            <div className='header-image'>
                <img src='./tk.jpg' alt='tk image' width='100%' height='100%' />
            </div>
            <span>
                <h1 className='header-text'>
                    Temitayo Kuyoro
                </h1>
            </span>
        </div>
    )

}

export default Header;

