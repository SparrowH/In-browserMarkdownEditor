import styled from "styled-components"
import documentIcon from '../assets/icon-document.svg'

const DocumentContainer = styled.div`
    display: flex;
    width: 170px;
    align-items: center;
    margin-bottom: 25px;
    margin-top: 25px;
`;

const DocumentImg = styled.img`
    width: 13px;
    height: 16px;
    margin-right: 19px;
`;

const DocumentContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const DocumentDate = styled.p`
    font-family: "Roboto", serif;
    color: #7C8187;
    font-size: 12px;
    margin-bottom: 4px;
`;

const DocumentLabel = styled.p`
    font-family: "Roboto", serif;
    color: #fff;
    font-size: 14px;

`;

interface DocumentCardProps  {
    date: string,
    label: string
}

function DocumentCard({date, label}: DocumentCardProps) {
    return(
        <DocumentContainer>
            <DocumentImg src={documentIcon} />
            <DocumentContent>
                <DocumentDate>{date}</DocumentDate>
                <DocumentLabel>{label}</DocumentLabel>
            </DocumentContent>
        </DocumentContainer>
    )
    
}

export default DocumentCard