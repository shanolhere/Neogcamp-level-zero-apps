import React, { useState } from "react";
import "./styles.css";
import Navbar from "./navbar";
import Footer from "./footer";

const data = {
  Pop: [
    {
      name: "The Shawshank Redemption",
      rating: "9.2/10"
    },
    {
      name: "The Godfather",
      rating: "9.2/10"
    },
    {
      name: "The Dark Knight",
      rating: "9.0/10"
    },
    {
      name: "The Godfather Part II",
      rating: "9.0/10"
    },
    {
      name: "12 Angry Men",
      rating: "8.9/10"
    },
    {
      name: "Schindler's List",
      rating: "8.9/10"
    }
  ],

  Telugu: [
    {
      name: "Aakasam Nee Haddhu Ra",
      rating: "10/10"
    },
    {
      name: "Jai Bhim",
      rating: "10/10"
    },
    {
      name: "Athadu",
      rating: "9.5/10"
    },
    {
      name: "Okkadu",
      rating: "10/10"
    },
    {
      name: "Evaru",
      rating: "9.2/10"
    },
    {
      name: "Master",
      rating: "9.4/10"
    }
  ],
  Hindi: [
    {
      name: "Rab ne bana di Jodi",
      rating: "10/10"
    },
    {
      name: "Om shanthi Om",
      rating: "9.8/10"
    },
    {
      name: "Sooryavansham",
      rating: "9.8/10"
    },
    {
      name: "Kal Ho na ho",
      rating: "9.5/10"
    },
    {
      name: "3 idiots",
      rating: "10/10"
    },
    {
      name: "PK",
      rating: "9.8/10"
    }
  ],
  Tamil: [
    {
      name: "Vikram",
      rating: "10/10"
    },
    {
      name: "VIkram Vedha",
      rating: "10/10"
    },
    {
      name: "Soorarai Potru",
      rating: "10/10"
    },
    {
      name: "Kaithi",
      rating: "10/10"
    },
    {
      name: "24",
      rating: "9.5/10"
    },
    {
      name: "Awara",
      rating: "9.4/10"
    }
  ],
  KPop: [
    {
      name: "Train to Busan",
      rating: "10/10"
    },
    {
      name: "Midnight",
      rating: "9.8/10"
    },
    {
      name: "I Saw the Devil ",
      rating: "9.5/10"
    },
    {
      name: "Miracle in Cell No. 7",
      rating: "10/10"
    },
    {
      name: "Silenced",
      rating: "10/10"
    },
    {
      name: "Burning",
      rating: "9.0/10"
    }
  ]
};

var movieKeys = Object.keys(data);
console.log(movieKeys);

export default function App() {
  const [genre, setGenre] = useState("Pop");

  const movieHandler = (genre) => {
    setGenre(genre);
    //console.log(genre);
  };

  return (
    <div className="App">
      <Navbar />
      {/* <h1>Movie Recommender</h1> */}
      <main>
        <h4>Welcome</h4>
        <h3>Let's dive into my movie wrapper.</h3>
        <p>Select any genre to start.</p>
        <div className="btn-container">
          {movieKeys.map((genre) => {
            return (
              <button onClick={() => movieHandler(genre)} key={genre}>
                {genre}
              </button>
            );
          })}
        </div>
        <ul>
          {data[genre].map((item) => {
            return (
              <li key={item.name}>
                <h3>{item.name}</h3>
                <p>Rating: {item.rating}</p>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
