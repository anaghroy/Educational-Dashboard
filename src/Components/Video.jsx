import React from "react";
import {
  Eye,
  GitPullRequestDraft,
  HardDriveDownload,
  MessageSquareMore,
} from "lucide-react";
import designers from "../assets/video/New designers.mp4";
import user1 from "../assets/images/user/user1.jpg";
import user2 from "../assets/images/user/user2.jpg";
import user3 from "../assets/images/user/user3.jpg";
const Video = ({ button }) => {
  return (
    <>
      <div className="wapper">
        <div className="top-side">
          <div className="content">
            <p>Essentials for Designers</p>
            <span>Understanding Keyframes</span>
          </div>
          <div className="icons">
            <div className="git">
              <GitPullRequestDraft strokeWidth={2} className="git-icon" />
            </div>
            <div className="download">
              <HardDriveDownload strokeWidth={2} className="hard-icon" />
            </div>
          </div>
        </div>
        <div className="vido-container">
          <div className="video-con">
            <video autoPlay loop muted src={designers}></video>
          </div>
          <div className="center">
            <span>Course 10</span>
            <div className="image-container">
              <div className="image">
                <img src={user1} alt="user1" />
              </div>
              <div className="image">
                <img src={user2} alt="user2" />
              </div>
              <div className="image">
                <img src={user3} alt="user3" />
              </div>
            </div>
            <p>148 People Watching</p>

            <div className="text">
              <div className="leave">
                <MessageSquareMore color="gray" strokeWidth={2} />
                <span>Leave Comment</span>
              </div>
              <div className="leave">
                <Eye color="gray" strokeWidth={2} />
                <span>View Description</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outer-button">
        <div className="inner">
          {button.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="side-btn" key={index}>
                <div className="icon">
                  <Icon color={item.iconColor} />
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Video;
