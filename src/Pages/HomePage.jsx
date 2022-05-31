import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import PlatPreview from "../Components/PlatPreview";


function HomePage() {
    return (
        <div className="w-screen h-screen">
            <Navbar />
            <div>
                <Carousel
                img1="https://fr-assets.lightspeedhq.com/img/2019/08/d9732c8c-8aac85b2-blog_foodpresentationtipsfromtopchefs.jpg"
                img2="https://www.obernairestaurantleresto.fr/ressources/images/66906d154b4b.jpg"
                img3="https://images.ricardocuisine.com/services/recipes/1074x1074_8119-cover.jpg"
                />
            </div>
            <div className="flex flex-row items-center justify-evenly">
                <input type="text" placeholder="Entrez le nom d'un plat" className="border-2 border-gray-500"/>
                <select>
                    <option>Filtre</option>
                </select>
            </div>
            <div className="w-full mt-4">
                <label className="ml-5">Les derniers plats</label>
            </div>
            <div className="flex flex-col">
                <PlatPreview 
                img="https://www.obernairestaurantleresto.fr/ressources/images/66906d154b4b.jpg"
                name="Un petit plat"
                description="Un plat qui est fait pour décorer la page"
                liked="https://icones.pro/wp-content/uploads/2021/02/icone-etoile-jaune.png"
                />
                <PlatPreview 
                img="https://resize.prod.femina.ladmedia.fr/rblr/652,438/img/var/2020-12/plat-le-plus-commande-au-monde.jpg"
                name="Un petit plat"
                description="Un plat qui est fait pour décorer la page"
                liked="http://cdn.onlinewebfonts.com/svg/img_323913.png"
                />
                <PlatPreview 
                img="https://www.obernairestaurantleresto.fr/ressources/images/66906d154b4b.jpg"
                name="Un petit plat"
                description="Un plat qui est fait pour décorer la page"
                liked="http://cdn.onlinewebfonts.com/svg/img_323913.png"
                />
                <PlatPreview 
                img="https://www.obernairestaurantleresto.fr/ressources/images/66906d154b4b.jpg"
                name="Un petit plat"
                description="Un plat qui est fait pour décorer la page"
                liked="http://cdn.onlinewebfonts.com/svg/img_323913.png"
                />
                <PlatPreview 
                img="https://www.obernairestaurantleresto.fr/ressources/images/66906d154b4b.jpg"
                name="Un petit plat"
                description="Un plat qui est fait pour décorer la page"
                liked="http://cdn.onlinewebfonts.com/svg/img_323913.png"
                />
                <PlatPreview 
                img="https://www.obernairestaurantleresto.fr/ressources/images/66906d154b4b.jpg"
                name="Un petit plat"
                description="Un plat qui est fait pour décorer la page"
                liked="http://cdn.onlinewebfonts.com/svg/img_323913.png"
                />
            </div>
            <Link className="" to="ajoutplat">
                <img className="w-12 h-12 sticky bottom-2 left-[20rem]" src="https://cdn.icon-icons.com/icons2/933/PNG/512/rounded-add-button_icon-icons.com_72592.png" />
            </Link>
        </div>
    );
}

export default HomePage;