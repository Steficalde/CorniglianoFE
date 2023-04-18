import SchoolCard from "../SchoolCard";
import google from "../../assets/images/google-play.png";

export  const Us = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-12">
            <h1>Chi siamo?</h1>
            <div className="flex  gap-12 max-xl:flex-col">
                <SchoolCard title="questo è il titolo" description="lorem ipsum" image={google}></SchoolCard>
                <SchoolCard title="questo è il titolo" description="lorem ipsum" image={google}></SchoolCard>
                <SchoolCard title="questo è il titolo" description="lorem ipsum" image={google}></SchoolCard>
            </div>
        </div>
    )
}