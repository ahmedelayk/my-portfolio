

export default function Header() {
    return (
        <>
            <div id="home" className="container mx-auto px-8 page-height flex items-center justify-between">
                <div className='header-text '>
                    <div>
                        <h3 className='text-4xl font-bold text-dark'>Hi,</h3>
                        <h3 className='text-4xl font-bold text-dark'>My name is</h3>
                        <h3 className='text-4xl font-bold text-gradientR'>Ahmed Elayek</h3>
                        <h3 className='text-4xl font-bold text-dark'>I am a passionate Software Engineer</h3>
                    </div>
                </div>
                <div className="my-photo">
                    <div>
                        {/* <img src="../../assets/Personal_.jpg" alt="personal" /> */ }
                        <img src="https://placehold.co/500x400" alt="personal" />
                    </div>
                </div>
            </div>
        </>
    )
}
