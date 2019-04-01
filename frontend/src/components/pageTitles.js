import React from "react";
import { PageTitleHeader, PageTitle, PageSubTitle, PageDescription } from '../styles/page';
import Icon from '../images/backgroundTopography.svg';

const PageTitles = (props) => (
    <>
    <PageTitleHeader>
        <PageTitle>{props.pageTitle}</PageTitle>
        <PageSubTitle className={!props.pageSub && 'hideText'}>{props.pageSub}</PageSubTitle>
        <PageDescription className={!props.pageDescription && 'hideText'}>{props.pageDescription}</PageDescription>
        <Icon className="topBackground"/>
    </PageTitleHeader>
    </>
)

export default PageTitles;
