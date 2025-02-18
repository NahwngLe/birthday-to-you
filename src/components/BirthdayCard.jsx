import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Swal from "sweetalert2";
import "tailwindcss/tailwind.css";

const BirthdayCard = () => {
    const audioRef = useRef(null);
    const tl = useRef(gsap.timeline({ paused: true }));

    useEffect(() => {
        Swal.fire({
            title: "Cậu có muốn bật nhạc không (Có đi mò)",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok luôn!",
            cancelButtonText: "Không thích",
            allowOutsideClick: false,
            allowEscapeKey: false,
        }).then((result) => {
            if (result.isConfirmed && audioRef.current) {
                audioRef.current.play();
            }
            tl.current.play();
        });

        tl.current
            .to(".container", { visibility: "visible", duration: 1 })
            .from(".one", { opacity: 0, y: 10, duration: 1 })
            .from(".two", { opacity: 0, y: 10, duration: 1 })
            .to(".one", { opacity: 0, y: 10, duration: 0.7 }, "+=3.5")
            .to(".two", { opacity: 0, y: 10, duration: 0.7 }, "-=1")
            .from(".three", { opacity: 0, y: 10, duration: 0.7 })
            .to(".three", { opacity: 0, y: 10, duration: 0.7 }, "+=3")
            .from(".four", { scale: 0.2, opacity: 0, duration: 0.7 });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
            <div className='fixed w-[20vw] '>
                <AudioPlayer
                    ref={audioRef}
                    src='src\assets\music\hbd.mpeg'
                    autoPlay
                    loop
                    volumePlacement="bottom"
                    className="custom-style mt-2 ml-2"
                // color="#444444"
                // sliderColor="#444444"
                // style={{ background: "#ffb3ba", borderRadius: "15px", padding: "30px" }}
                />
            </div>
            <div className="container text-center p-6 bg-white shadow-lg rounded-lg">
                <div className="one text-3xl font-bold">
                    Hi <span className="text-blue-500">Irene</span>
                </div>
                <p className="two text-lg">I really like your name btw!</p>
                <div className="three text-2xl mt-4">It's your birthday!! 🎉</div>
                <div className="four mt-4">
                    <p className="hbd-chatbox text-lg font-semibold">
                        Happy birthday to you! Wishing you all the best! 🎂
                    </p>
                    <button className="fake-btn mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                        Send
                    </button>
                </div>
                <div className="six mt-6">
                    <img
                        src="./img/irene.jpg"
                        alt="profile"
                        className="w-32 h-32 rounded-full mx-auto"
                    />
                    <h3 className="wish-hbd text-2xl font-bold text-pink-500 mt-2">
                        Happy Birthday!
                    </h3>
                    <h5 className="text-lg">May your wishes come true! 😊</h5>
                </div>
                <div className="nine mt-6">
                    <p>Okay, now come back and tell me if you liked it.</p>
                    <p id="replay" className="cursor-pointer text-blue-500 underline">
                        Or click, if you want to watch it again.
                    </p>
                    <p className="last-smile text-3xl">:)</p>
                </div>
            </div>
        </div>
    );
};

export default BirthdayCard;
