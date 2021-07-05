import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CardComponent from '../CardComponent';
import { Container, Content, Icon, Spinner, Thumbnail } from 'native-base';

export default class HomeTab extends Component {
    state = {
        feeds: [],
        following: [],
        loading: true
    }
    componentDidMount() {
        this.fetchFeeds().then(feeds => {
            console.log(feeds);
            this.setState({
                feeds: feeds,
            })
        });
        this.fetchFollowing().then(following => {
            this.setState({
                following: following
            })
        });
        if (this.state.feeds !== [] && this.state.following !== []) {
            this.setState({
                loading: false
            }, () => { console.log(this.state.following) })
        };
    }

    async fetchFollowing() {
        const data = {
            id: 2,
            jsonrpc: "2.0",
            method: "call",
            params: [
                "follow_api",
                "get_following",
                ["anpigon", "", "blog", 10]
            ]
        };
        return fetch('https://api.steemit.com',
            {
                method: 'POST',
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => res.result.map(({ following }) => following))
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
                        (<Spinner />) :

                        (<View style={{ height: 100 }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                                <Text style={{ fontWeight: 'bold' }}>Stories</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name="md-play" style={{ fontSize: 14 }}></Icon>
                                    <Text style={{ fontWeight: 'bold' }}> Watch All</Text>
                                </View>
                            </View>
                            <View style={{ flex: 3 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{
                                        alignItems: 'center',
                                        paddingStart: 5,
                                        paddingEnd: 5
                                    }}>
                                    {
                                        this.state.following.map(following => <Thumbnail
                                            style={styles.thumbnail}
                                            source={{ uri: `https://steemitimages.com/u/${following}/avatar` }} />)
                                    }
                                </ScrollView>
                            </View>
                        </View>)
                    }


                    {this.state.feeds.map((feed, index) => <CardComponent data={feed} key={index} />)}
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
    thumbnail: {
        marginHorizontal: 5, borderColor: 'pink', borderWidth: 2
    }
})