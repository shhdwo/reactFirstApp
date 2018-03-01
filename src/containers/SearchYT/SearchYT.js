// @flow

import React, { Component } from 'react';
import { Container } from 'reactstrap';
import YouTubeApi from 'youtube-api-search';
import _ from 'lodash';
import { connect } from "react-redux";

import './SearchYT.css';
import Search from '../../components/Search';
import YTListItem from '../../components/YTListItem';
import { term_change, data_update } from "../../actions/actions";

const API_KEY = "AIzaSyAVWUL6tCTxKtAsiYOg6n-vb2kb5Ocoi58";

type Props = {
    searchTerm: string,
    data: [],
    termChange: (string) => void,
    resetHandler: () => void,
    dataUpdate: ([]) => void
}

class SearchYT extends Component<Props, {}> {

    componentDidMount() {
        this.fetchData();
    }

    inputChangeHandler = (term: string) => {
        this.props.termChange(term);
        _.debounce(() => { this.fetchData() }, 500)();
    }

    fetchData = () => {
        YouTubeApi({ key: API_KEY, term: this.props.searchTerm, order: "date" }, (data) => {
            this.props.dataUpdate(data);
        })
    }
    
    render() {
        let items = []

        if (this.props.data) {
            items = this.props.data.map(item =>
                <YTListItem
                    key={item.id.videoId}
                    image={item.snippet.thumbnails.default.url}
                    title={item.snippet.title}
                    desc={item.snippet.description} />
            );
        }

        return (
            <Container className="search-container">
                <Search
                    searchTerm={this.props.searchTerm}
                    resetHandler={this.props.resetHandler}
                    inputChangeHandler={(term: string) => this.inputChangeHandler(term)} />
                {items}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchReducer.term,
        data: state.searchReducer.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        termChange: (value: string) => {
            dispatch(term_change(value))
        },
        resetHandler: () => {
            dispatch(term_change(""))
        },
        dataUpdate: (value: []) => {
            dispatch(data_update(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchYT);