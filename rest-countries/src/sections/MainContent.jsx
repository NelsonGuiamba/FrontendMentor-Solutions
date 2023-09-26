import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Country from "../components/Country";
import CountryDetail from "../components/CountryDetail.jsx";
import data from "../data";

const MainContent = () => {
    const [countries, setCountries] = useState(() => data);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("all");
    const [countryName, setCountryName] = useState(-1);
    const [countriesAlpha, setCountriesAlfa] = useState([]);

    useEffect(() => {
        setCountriesAlfa(() => {
            let countries = {};
            data.map((country) => {
                countries[country.alpha3Code] = country.name;
            });
            return countries;
        });
    }, []);

    useEffect(() => {
        setCountries(() => {
            let newCountries = [];
            data.map((country) => {
                if (region === "all" || country.region.toLowerCase() === region)
                    newCountries.push(country);
            });
            return newCountries;
        });
    }, [region]);

    useEffect(() => {
        setCountries(() => {
            let newCountries = [];
            data.map((country) => {
                if (
                    country.name
                        .toLowerCase()
                        .search(`^${search.toLowerCase()}`) > -1
                )
                    newCountries.push(country);
            });
            return newCountries;
        });
    }, [search]);

    console.log(countriesAlpha);
    console.log(countries.at(countryName));

    return (
        <section className="bg-gray-800 dark:bg-blue-800 dark:text-white w-full min-h-screen">
            {countryName === -1 ? (
                <div className="container pt-8">
                    <SearchBar
                        search={search}
                        setSearch={setSearch}
                        setRegion={setRegion}
                    />
                    <div className="mt-8 flex justify-center md:justify-normal w-full flex-wrap gap-8">
                        {countries.map((country, index) => (
                            <Country
                                key={country.name}
                                gotoCountry={() => setCountryName(index)}
                                name={country.name}
                                region={country.region}
                                capital={country.capital}
                                flag={country.flags.png}
                                population={country.population}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <CountryDetail
                    country={countries.at(countryName)}
                    handleBack={() => setCountryName(-1)}
                    countriesAlpha={countriesAlpha}
                />
            )}
        </section>
    );
};

export default MainContent;
