import Image from "next/image";

const AppLogo = () => {
    return ( 
        <div>
            <Image 
                src="/images/app-logo-01.png" 
                width={200}
                height={200}
                alt="App Logo"
            />
        </div>
    )
}

export default AppLogo; 