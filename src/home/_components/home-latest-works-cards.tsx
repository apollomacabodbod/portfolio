import { motion } from "framer-motion";
import { useState } from "react";

export default function WorksCards() {
  type HomeCards = {
    id: number;
    description: string;
    year: string;
    image: string;
  };

  const [data] = useState<HomeCards[]>([
    {
      id: 1,
      description: `Camping, Adventure and Recreational Park Website which gets the data from Faux API. 
      Built with React TS using Hooks, Tailwind CSS for styling, Redux Toolkit for state management, React Router for dynamic routes and navigation, Shadcn/ui for UI frameworks and Framer Motion for animation. `,
      image: "/parking-camp.png",
      year: "2023",
    },
    {
      id: 2,
      description: `Film makers and Videographer  Website which gets the data from Faux API. 
      Built with React TS using Hooks, Tailwind CSS for styling, Redux Toolkit for state management, React Router for dynamic routes and navigation and Framer Motion for animation. `,
      image: "/film-makers.png",
      year: "2023",
    },


    {
      id: 3,
      description: `Coming Soon`,
      image: "/coming-soon.png",
      year: "2023",
    },



  ]);

  const handleClickCamping = () => {
    window.open('https://park-camping-app.vercel.app/');
  };

  const handleClickFilm = () => {
    window.open('https://film-makers-app.vercel.app/');
  };





  // Function to handle click based on item id
  const handleCardClick =  (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // Prevent the card click handler from firing
    if (id === 1) {
      handleClickCamping();
    } else if (id === 2) {
      handleClickFilm();
    }
  };

  // Handle click for GitHub icon
  const handleClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // Prevent the card click handler from firing
   
    if (id === 1) {
      CampingSourceCode()
    } else if (id === 2) {
      FilmSourceCode()
    }

    else if (id === 3) {
      RestoSourceCode()
    }


  };



  const CampingSourceCode = () => {
    window.open('https://github.com/apollomacabodbod/park-camping-app');
  };

  const FilmSourceCode = () => {
    window.open('https://github.com/apollomacabodbod/film-makers-app');
  };



  const RestoSourceCode = () => {
    window.open('https://github.com/apollomacabodbod/resto-app');
  };




  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.875em] mt-[3.125em] mb-[5.875em] transition-all duration-1000 ease-in-out">
      {data.map((item) => (
        <motion.div
          key={item.id}
          className="group relative bg-cover h-[20.0625em] shadow-lg drop-shadow-[0px_10px_20px_rgba(0,0,0,0.3)] transition-all cursor-pointer duration-1000 ease-in-out rounded-[0.3125em]"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0, ease: "easeInOut" },
            },
          }}
        >
     
          {/* Gradient Overlay (Hidden by Default, Visible on Hover) */}
          <div className="absolute inset-0 backdrop-blur-lg bg-[#030712]/40 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[0.3125em]"></div>

          {/* Title (Hidden by Default, Visible on Hover) */}
          <motion.p
            className="absolute top-[1em] select-none px-[1em] text-white text-[1rem] sm:text-[1.2em] font-inter-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            {item.description}
          </motion.p>

          <motion.div
            className="absolute z-50 flex items-center gap-[0.5em] top-[17em] px-[1em] select-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            onClick={(e) => handleClick(e, item.id)} // Pass both event and id here
          >
            

            
            <p className="text-white text-[1rem] sm:text-[1.2em]  font-inter-tight ">Source Code :</p>
            <img 
              src="/github.png" 
              alt="GitHub Icon" 
              className="cursor-pointer w-[1.5em] h-[1.5em] "
             
            />
          </motion.div>




          <motion.div
            className="absolute z-50 flex items-center gap-[0.5em] select-none top-[17em] right-[0.1%] px-[1em] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            onClick={(e) => handleCardClick(e, item.id)}
          >
            {item.description !== "Coming Soon" && (
              <>
                <p className="text-white text-[1rem] sm:text-[1.2em] font-inter-tight">
        Live
                </p>
                <img
                  src="/home-header-arrow.svg"
                  alt="GitHub Icon"
                  className="cursor-pointer w-[1.5em] h-[1.5em]"
                />
              </>
            )}
          </motion.div>





        </motion.div>
      ))}
    </div>
  );
}
