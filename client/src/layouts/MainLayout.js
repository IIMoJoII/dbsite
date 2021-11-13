import '../App.css';

function MainLayout({children}) {
    return (
        <div className="main">
            {children}
        </div>
    );
}

export default MainLayout;