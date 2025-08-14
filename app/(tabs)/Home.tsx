import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// Local imports
import { components } from '../components';
import { theme } from '../constants';
import BottomTabBar from '../navigation/BottomTabBar';

// Data
const homeData = {
  restaurants: [
    { id: 1, restaurantName: 'Rose Garden Restaurant', restaurantImageUrl: 'https://i.ibb.co/PDP6QN9/imageedit-2-8913973589.jpg', restaurantPoint: '4.7', deliveryCost: '0.0₺', deliveryTime: '20 min', cuisine: ['Burger', 'Chicken', 'Wings']},
    { id: 2, restaurantName: 'Adana Grill House', restaurantImageUrl: 'https://i.ibb.co/C09njxC/imageedit-4-3775173323.jpg', restaurantPoint: '4.5', deliveryCost: '5.0₺', deliveryTime: '35 min', cuisine: ['Kebab', 'Grill', 'Turkish']},
    { id: 3, restaurantName: 'Green Leaf Vegan', restaurantImageUrl: 'https://i.ibb.co/CQZ8Nb6/imageedit-6-8890698964.jpg', restaurantPoint: '4.9', deliveryCost: '0.0₺', deliveryTime: '25 min', cuisine: ['Vegan', 'Salads', 'Healthy']},
  ],
  profile: { name: 'baris-cakmak' },
};
const categories = [
  { id: '1', name: 'All' }, { id: '2', name: 'Hot Dog' }, { id: '3', name: 'Burger' }, { id: '4', name: 'Pizza' },
];

// --- 1. Enhanced reviews data with avatars ---
const reviews = [
    {id: 1, name: 'Jordan Hebert', review: 'Amazing food and quick delivery.', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'},
    {id: 2, name: 'John Smith', review: 'The burgers are the best in town. Highly recommended.', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026702d'},
    {id: 3, name: 'Alex Ray', review: 'Consistently great quality and always on time. My go-to!', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d'}
];

// --- 2. Redesigned ReviewItem component for a better visual look ---
const ReviewItem = ({ item, last }) => {
  return (
    <View style={[styles.reviewCard, { marginRight: last ? 0 : 15 }]}>
      <View style={styles.reviewHeader}>
        <Image source={{ uri: item.avatarUrl }} style={styles.reviewAvatar} />
        <Text style={styles.reviewName}>{item.name}</Text>
      </View>
      <Text style={styles.reviewText}>"{item.review}"</Text>
    </View>
  );
};


const Home: React.FC = () => {
  const navigation = useNavigation();
  const { restaurants, profile } = homeData;
  const [activeCategory, setActiveCategory] = useState('1');

  const renderStatusBar = () => <components.StatusBar />;

  const renderHeader = () => (
    <components.Header basket={true} user={true} userImage={true} userName={profile.name} />
  );

  const renderSearchBar = () => (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputWrapper}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput placeholder="Search dishes, restaurants" placeholderTextColor="#999" style={styles.searchInput} />
      </View>
    </View>
  );

  const renderCategories = () => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>All Categories</Text>
        <TouchableOpacity><Text style={styles.seeAllText}>See All &gt;</Text></TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isActive = item.id === activeCategory;
          return (
            <TouchableOpacity style={[styles.categoryPill, isActive && styles.activeCategoryPill]} onPress={() => setActiveCategory(item.id)}>
              <Text style={[styles.categoryText, isActive && styles.activeCategoryText]}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );

  const renderOpenRestaurants = () => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Open Restaurants</Text>
        <TouchableOpacity><Text style={styles.seeAllText}>See All &gt;</Text></TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        {restaurants.map((item) => (
          <TouchableOpacity key={item.id} style={styles.restaurantCard}>
            <Image source={{ uri: item.restaurantImageUrl }} style={styles.restaurantImage} />
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{item.restaurantName}</Text>
              <Text style={styles.restaurantCuisine}>{item.cuisine.join(' - ')}</Text>
              <View style={styles.restaurantStats}>
                <Text>⭐ {item.restaurantPoint}</Text>
                <Text> 🚚 {item.deliveryCost === '0.0₺' ? 'Free' : item.deliveryCost}</Text>
                <Text> 🕒 {item.deliveryTime}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderReviews = () => (
    <View style={[styles.sectionContainer, {marginBottom: 20}]}>
      <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Our Happy Clients</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Reviews' as never)}><Text style={styles.seeAllText}>See All &gt;</Text></TouchableOpacity>
      </View>
      <FlatList
        data={reviews}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <ReviewItem item={item} last={index === reviews.length - 1} />
        )}
      />
    </View>
  );

  const renderContent = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
      {renderSearchBar()}
      {renderCategories()}
      {renderOpenRestaurants()}
      {renderReviews()}
    </ScrollView>
  );

  const renderBottomTabBar = () => <BottomTabBar />;
  const renderHomeIndicator = () => <components.HomeIndicator />;

  return (
    <components.SmartView style={{ flex: 1, backgroundColor: '#fff' }}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </components.SmartView>
  );
};

const styles = StyleSheet.create({
  // ... (all previous styles are still here)
  searchContainer: { paddingTop: 10, paddingHorizontal: 20 },
  searchInputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F7F7', borderRadius: 12, paddingHorizontal: 15 },
  searchIcon: { fontSize: 20, marginRight: 10 },
  searchInput: { flex: 1, paddingVertical: 14, fontSize: 16, color: '#000' },
  sectionContainer: { marginTop: 25 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 15 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  seeAllText: { color: theme.colors.primary, fontWeight: '600' },
  categoryPill: { backgroundColor: '#F7F7F7', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 50, marginRight: 10 },
  activeCategoryPill: { backgroundColor: theme.colors.primary },
  categoryText: { fontSize: 16, fontWeight: '600', color: '#000' },
  activeCategoryText: { color: '#fff' },
  restaurantCard: { marginBottom: 25 },
  restaurantImage: { width: '100%', height: 150, borderRadius: 15 },
  restaurantInfo: { paddingTop: 10 },
  restaurantName: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  restaurantCuisine: { fontSize: 14, color: '#666', marginBottom: 8 },
  restaurantStats: { flexDirection: 'row', alignItems: 'center', gap: 15 },

  // --- 3. Added new styles for the redesigned review card ---
  reviewCard: {
    width: 300,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    // Shadow for a card-like effect
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20, // Improves readability
  },
});

export default Home;