// @flow
import * as React from "react";
import {createStackNavigator, createBottomTabNavigator} from "react-navigation";

import {StackNavigatorOptions, animationEnabled} from "../components/Navigation";

import {MusicTabBar} from "../components/music";

import Library from "./Library";
import Album from "./Album";
import Discovery from "./Discovery";
import Playlist from "./Playlist";
import Profile from "./Profile";
import Lesson from "./Lesson";
import Schedule from "./Schedule";
import ScheduleByTutor from "./ScheduleByTutor";
import ScheduleByAvailability from "./ScheduleByAvailability";
import TutorProfile from "./TutorProfile";
import CalendarPicker from "./CalendarPicker";

import type {NavigationProps} from "../components/Navigation";

const tabs = [
    { key: "Library", label: "Library", icon: "circle-empty" },
    { key: "MusicalProfile", label: "Profile", icon: "account" },
    { key: "Lesson", label: "Lesson", icon: "feed" },
    { key: "MoneyProfile", label: "Profile", icon: "money" },
    { key: "MoreProfile", label: "Profile", icon: "options" },
    

];

const LibraryNavigator = createStackNavigator({
    Library: { screen: Library },
    Album: { screen: Album }
}, StackNavigatorOptions);

const LessonNavigator = createStackNavigator({
    Lesson: { screen: Lesson },
    Schedule: { screen: Schedule },
    ScheduleByTutor: { screen: ScheduleByTutor },
    ScheduleByAvailability: { screen: ScheduleByAvailability },
    TutorProfile: { screen: TutorProfile },
    CalendarPicker: { screen: CalendarPicker },
}, StackNavigatorOptions);

const DiscoveryNavigator = createStackNavigator({
    Discovery: { screen: Discovery },
    Playlist: { screen: Playlist }
}, StackNavigatorOptions);

const ProfileNavigator = createStackNavigator({
    MusicalProfile: { screen: Profile },
    ProfileAlbum: { screen: Album },
    ProfilePlaylist: { screen: Playlist },
}, StackNavigatorOptions);

export const MusicNavigator = createBottomTabNavigator({
    Library: { screen: LibraryNavigator },
    MusicalProfile: { screen: ProfileNavigator },
    Lesson: { screen: LessonNavigator },
    Discovery: { screen: DiscoveryNavigator },
    Discovery: { screen: DiscoveryNavigator },
    
}, {
    animationEnabled,
    // eslint-disable-next-line react/display-name
    tabBarComponent: ({ navigation }: NavigationProps<>) => <MusicTabBar {...{navigation, tabs}} />,
    tabBarPosition: "bottom",
    swipeEnabled: false
});
