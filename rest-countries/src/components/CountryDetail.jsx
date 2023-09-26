import BackArrow from "../assets/icons/BackArrow.svg?react";

const CountryDetail = ({ country, handleBack, countriesAlpha }) => {
    console.log("D ", country);
    const comma = (index, length) => (index < length - 1 ? "," : "");
    return (
        <div className="container py-8 dark:text-white">
            <div onClick={handleBack} className="shadow-md flex items-center gap-4 w-fit px-4 py-2">
                <BackArrow />
                <p>Back</p>
            </div>

            <div className="mt-12 sm:flex sm:gap-4  h-fit">
                <div className="sm:w-1/2  ">
                    <img
                        src={country.flag}
                        alt={`flag of ${country.name}`}
                        className="w-full h-full"
                    />
                </div>
                <div className="text-sm sm:w-1/2 ">
                    <h1 className="text-2xl font-bold my-8">{country.name}</h1>
                    <div className="sm:flex sm:gap-2">
                        <div className="sm:flex sm:gap-4 sm:flex-col">
                            <p className="font-semibold">
                                Native Name: <span className="font-normal">{country.nativeName}</span>
                            </p>
                            <p className="font-semibold">
                                Population: <span className="font-normal">{country.population}</span>
                            </p>
                            < p className="font-semibold">
                                Region: <span className="font-normal">{country.region}</span>
                            </p>
                            <p className="font-semibold">
                                Sub Region: <span className="font-normal">{country.subregion}</span>
                            </p>
                            <p className="font-semibold">
                                Capital: <span className="font-normal">{country.capital}</span>
                            </p>
                        </div>
                        <div className="my-6 flex gap-2 flex-col">
                            <p className="font-semibold">
                                Top Level Domain:{" "}
                                <span className="font-normal">{country.topLevelDomain}</span>
                            </p>
                            <p className="font-semibold">
                                Currencies:
                                {country.currencies.map((currency, index) => (
                                    <span className="font-normal">
                                        {`${currency.name}${comma(
                                            index,
                                            country.currencies.length
                                        )} `}
                                    </span>
                                ))}
                            </p>
                            <p className="font-semibold">
                                Languages:
                                {country.languages.map((lang, index) => (
                                    <span className="font-normal">
                                        {`${lang.name}${comma(
                                            index,
                                            country.languages.length
                                        )} `}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                    {country.borders && ( // Islands does not have border countries
                        <div className="mt-3">
                            <p className="font-semibold text-base mb-2">Border Countries</p>
                            <div className="flex gap-2 flex-wrap">
                            {country.borders.map((alphaCode, index) => (
                                <span className="font-normal inline-block p-2 shadow-lg bg-white dark:bg-blue-600">
                                    {`${countriesAlpha[alphaCode]} `}
                                </span>
                            ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;
