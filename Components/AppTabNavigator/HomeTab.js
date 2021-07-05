import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import CardComponent from '../CardComponent';
import { Container, Content, Icon, Spinner } from 'native-base';

export default class HomeTab extends Component {
    state = {
        feeds: [],
        loading: true
    }
    componentDidMount() {
        this.fetchFeeds().then(feeds => {
            console.log(feeds);
            this.setState({
                feeds: feeds,
                loading: false,
            })
        })
    }
    async fetchFeeds() {
        const data = {
            id: 1,
            jsonrpc: "2.0",
            method: "call",
            params: [
                "database_api",
                "get_discussions_by_created",
                [{ tag: "kr", limit: 20 }]
            ]
        };
        const res = await fetch('https://api.steemit.com', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        const res_1 = await res.json();
        return res_1.result;
    }
    render() {
        return (
            <Container style={styles.container} >
                <Content>
                    {this.state.loading === true ?
                        <Spinner style={styles.spiner} /> :
                        (this.state.feeds.map((feed, index) => <CardComponent data={feed} key={index} />))
                    }
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})