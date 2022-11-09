import React from "react"

class AudioPlayer extends React.Component {
    render() {
        return (
            <div>
                <div className="absolute top-1 right-1 h-[1.57rem] w-[30vw] sm:w-[20vw] md:w-[14vw] lg:w-[10.4vw] z-30 bg-[#F5F5F5]"></div>
                <iframe width="100%" height="160" scrolling="no" frameBorder="no" allow="autoplay" src={this.props.url}></iframe>
                <div className="absolute bottom-0 left-0 h-[30px] w-[108px] z-30 bg-[#F5F5F5] rounded-bl-sm border-l border-b border-[#e7e7e7]"></div>
            </div>
        )
    }
}

export default AudioPlayer