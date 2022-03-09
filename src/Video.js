import video1 from './video/River_Flows_In_You.mp4'
import { useRef, useImperativeHandle } from 'react'
import { forwardRef } from 'react'

function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        },
    }))
    return (
        <video
            ref={videoRef}
            width={400}
            src={video1} 
         />
    )
}

export default forwardRef(Video)