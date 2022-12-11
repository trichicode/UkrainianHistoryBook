import {FC, useEffect, useRef, useState} from "react";
import './Settings.scss';
import {VolumeSlider} from "../slider/CustomSlider";

const Settings = () => {
    const [isPanelOpen, openPanel] = useState<boolean>(false);

    useEffect(() => {
        const panel = document.getElementById('settingsPanel');
        if ( panel ) {
            panel.style.visibility = 'hidden';
        }

        const timer = setTimeout(() => {
            if ( panel ) {
                panel.style.visibility = 'visible';
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const app = document.getElementById('app-contains');

        if ( isPanelOpen ) {
            if ( app ) {
                app.style.filter = 'blur(6px)';
            }
        } else {
            if ( app ) {
                app.style.filter = 'blur(0)';
            }
        }
    }, [isPanelOpen]);

    return (
        <div>
            <SettingsPanel isPanelOpen={isPanelOpen} closePanel={() => openPanel(false)}/>

            <button className="settingsButton" onClick={() => openPanel(!isPanelOpen)}>
                <img
                    width={27}
                    height={25}
                    style={{ rotate: '180deg' }}
                    src={isPanelOpen ? "./assets/imgs/arrow.svg" : "./assets/imgs/settings.svg"}
                    alt="prev-arrow"
                />
            </button>
        </div>
    );
};

const SettingsPanel:FC<{isPanelOpen: boolean, closePanel: () => void}> = ({isPanelOpen, closePanel}) => {
    const audioPlayer = useRef<HTMLAudioElement>(null);

    const [isFirstPlay, setIsFirstPlay] = useState<boolean>(true);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const [volume, setVolume] = useState<number>(0);
    const [lastVolume, setLastVolume] = useState<number>(0);

    useEffect(() => {
        const audio = audioPlayer.current;

        if ( audio ) {
            audio.muted = volume === 0;
            audio.volume = volume / 100;
        }
    }, [volume]);

    return (
        <div>
            {
                isPanelOpen && (
                    <div className="backPanel" onClick={closePanel}>
                    </div>
                )
            }
            <div
                id="settingsPanel"
                className="settingsPanel"
                style={{animation: isPanelOpen ? "slide-in 0.5s forwards" : "slide-out 0.5s forwards" }}
            >
                <div className="audioControls-wrapper" >
                    <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
                        <button className="playButton" onClick={() => {
                            const audio = audioPlayer.current;

                            if ( audio ) {
                                if ( audio.paused ) {
                                    audio.play()
                                        .then(() => {
                                            setIsPlaying(true);
                                            if ( isFirstPlay && volume === 0 ) {
                                                setVolume(10 );
                                                setIsFirstPlay(false);
                                            }
                                            setIsMuted(false);
                                            audio.volume = volume / 100;
                                        })
                                        .catch((error: any) => console.log('play promise fails: ', error));
                                } else {
                                    audio.pause();
                                    setIsPlaying(false);
                                }
                            }
                        }}>
                            <img
                                width={27}
                                height={25}
                                src={isPlaying ? "./assets/imgs/pause.svg" : "./assets/imgs/play.svg"}
                                alt="play"
                            />
                        </button>

                        <div className="audioControls-container" >
                            <button className="muteButton" onClick={() => {
                                if ( !isMuted ) {
                                    setLastVolume(volume);
                                    setVolume(0);
                                    setIsMuted(true);
                                } else {
                                    setVolume(lastVolume);
                                    setIsMuted(false);
                                }
                            }}>
                                <img
                                    width={27}
                                    height={25}
                                    src={isMuted ? "./assets/imgs/mute.svg" : "./assets/imgs/unmute.svg"}
                                    alt="back-arrow"
                                />
                            </button>

                            <div style={{width: "calc(100% - 100px)", marginLeft: 30}}>
                                <VolumeSlider
                                    value={volume}
                                    min={0}
                                    max={100}
                                    onChange={(e: any) => {
                                        const volume = (e.target as any).value;
                                        setVolume(volume === 0 ? 0 : volume);
                                        setIsMuted(volume === 0);
                                    }}
                                    step={1}
                                    valueLabelDisplay="on"
                                />
                            </div>
                        </div>
                    </div>

                    <h1 className="companyName"> • HighTechCode LLC </h1>
                </div>

                <audio
                    ref={audioPlayer}
                    muted
                    src="../assets/sound/main.mp3"
                    style={{position: 'absolute', zIndex: -1}}
                />
            </div>
        </div>
    )
}
export default Settings;