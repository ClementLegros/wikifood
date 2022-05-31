import { Link } from "react-router-dom";
import BackArrow from "../Components/BackArrow";


const DetailPlatPage = () => {
    return (
        <div>
            <BackArrow />
            <div>
                {/* Header */}
                <div className="flex flex-col mt-10">
                    <div className="w-full text-center">
                        <label className="text-3xl underline">Pizza Margherita</label>
                    </div>
                    <div className="flex flex-col mt-2 items-center w-full">
                        <div className="mx-2">
                            <img className="w-64" src="https://img.cuisineaz.com/660x660/2021/02/25/i159373-pizza-margherita.jpeg" />
                        </div>
                        <div>
                            <label className="text-2xl underline">Informations</label>
                        </div>
                        <div className="flex flex-row justify-evenly w-full text-center mt-2">
                            <div className="flex flex-col">
                                <label className="font-semibold">Calories</label>
                                <label>3000cal</label>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold">Temps</label>
                                <label>25m</label>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold">Difficulté</label>
                                <label>Facile</label>
                            </div>
                        </div>
                        <div className="mt-2 flex flex-col items-center w-full">
                            <div>
                                <label className="text-2xl underline">Ingrédient</label>
                            </div>
                            <div className="flex flex-row w-full mt-2">
                                <div className="flex-col w-1/2 text-center">
                                    <label>Pate à pizza</label><br/>
                                    <label>Sauce Tomate</label><br/>
                                    <label>Fromage</label>
                                </div>
                                <div className="flex-col w-1/2 text-center">
                                    <label>Jambon</label><br/>
                                    <label>Test</label><br/>
                                    <label>Test</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div>
                                <label className="text-2xl underline">Etapes</label>
                            </div>
                            <div className="mt-2">
                                <ul>
                                    <li>étape 1</li>
                                    <li>étape 2</li>
                                    <li>étape 3</li>
                                    <li>étape 4</li>
                                    <li>étape 5</li>
                                    <li>étape 6</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DetailPlatPage;