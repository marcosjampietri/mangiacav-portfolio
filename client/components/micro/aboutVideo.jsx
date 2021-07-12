import { Reveal, PageR, RevealL } from "../reveal";

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { animated, useSpring } from "react-spring";

import styled from "styled-components";
import { vidAction } from "../../store/actions/modActions";
import { below } from "../../styles/breakpoint";

const Video = () => {
    const dispatch = useDispatch();
    //access rootReducer
    const { ModOn } = useSelector((state) => state.mod);

    //dispatch buttons
    const toggleMod = () => {
        dispatch(vidAction());
    };

    useEffect(() => {
        if (ModOn) {
            dispatch(modAction());
        }
    }, [dispatch]);

    return (
        <Block onClick={toggleMod}>
            <PageR>
                <AboutImg src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80" />
            </PageR>
        </Block>
    );
};

export default Video;

const Block = styled.div`
    flex: 1 1 480px;
	height 50vh;

    background-color: grey;
    cursor: pointer;

	:before{
		content: "";
		display: block;
		position: absolute;
		bottom: calc(100px + -20vh);
		right: 0px;
		width: 200px;
		height: 400px;
		background-color: hsla(340, 95%, 45%, 1);

	}

`;

const AboutImg = styled.img`
    width: 130%;
    height: 400px;
    transform: translateX(-11.5%);

    object-fit: cover;
    object-position: 50% 20%;

    box-shadow: 5px 12px 30px hsla(0, 0%, 0%, 0.99);
`;
