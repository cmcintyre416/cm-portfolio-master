import React from "react";
import { PageTitleHeader, PageTitle, PageSubTitle, PageDescription } from '../styles/page';
import Icon from '../images/backgroundTopography.svg';

const PageTitles = (props) => (
    <>
    <PageTitleHeader>
        <PageTitle>{props.pageTitle}</PageTitle>
        <PageSubTitle>{props.pageSub}</PageSubTitle>
        <PageDescription>{props.pageDescription}</PageDescription>
        <Icon className="topBackground"/>
    </PageTitleHeader>
    </>
)

export default PageTitles;
