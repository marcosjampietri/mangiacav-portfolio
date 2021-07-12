import styled from "styled-components";

const GoogleMap = () => {
    return (
        <Google>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19846.412936943467!2d-0.13615240976087678!3d51.55353663130981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b0577dabcdf%3A0x1c1ecc71d35ab732!2sLondon%20N7!5e0!3m2!1sen!2suk!4v1625765330044!5m2!1sen!2suk"
                allowfullscreen=""
                loading="lazy"></iframe>
        </Google>
    );
};

export default GoogleMap;

const Google = styled.div`
    width: 100vw;
    height: 500px;
    margin: 0px auto;

    iframe {
        box-shadow: inset 2px 2px 20px red;
        width: 100%;
        height: 100%;
    }
`;
