import React from "react";


const ChatHeader = ({user}) => {
    return (
    <div className="d-flex flex-column col-12 col-lg-12 col-xl-12 chat-window">
        <div className="alight-item-start py-2 px-4 w-100 border-botton border-info d-lg-block">
            <div className="d-flex align-items-center py-1">
                    <div className="position-relative">
                            <img
                            src="Front-end\react-app\src\features\pic\user.png"
                            className="rounded-circle mx-2"
                            alt={user.username}
                            width="40"
                            height="40"
                            />
                    </div>
                    <div className="flex-grow-1">
                        <strong>Logged in as {user.username}</strong>
                    </div>
            </div>
            </div>

        </div>

    )


}