import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'
import { AudioPlayer } from 'react-audio-play';

const AudioConfirm = ({ setIsPlay }) => {
    const audioRef = useRef(null)

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
            // if (result.isConfirmed) {
            if (result.isConfirmed) {
                setIsPlay(true)
                setTimeout(() => {
                    audioRef.current?.play()
                }, 100)
            } else if (result.dismiss) {
                    setIsPlay(true)
            }
            // }
        })
    }, [])

    return (
        <div className='fixed w-[20vw] '>
            <AudioPlayer
                ref={audioRef}
                src='/public/ILoveYouSo.mp3'
                volume={50}
                autoPlay
                loop
                volumePlacement="bottom"
                className="custom-style mt-2 ml-2 z-50"
            // color="#444444"
            // sliderColor="#444444"
            // style={{ background: "#ffb3ba", borderRadius: "15px", padding: "30px" }}
            />
        </div>
    )
}

export default AudioConfirm