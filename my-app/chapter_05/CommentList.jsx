import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "seon",
        comment: "안녕하세요, seon입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "강민경",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
    {
        name: "조세호",
        comment: "처음엔 좀 어려워 보였는데 의외로 할만하네용~~?",
    }
];

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
