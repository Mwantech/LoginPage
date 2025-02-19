// app/(tabs)/index.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

// Mock data for categories
const categories = [
  { id: '1', name: 'Dogs', icon: 'dog' },
  { id: '2', name: 'Cats', icon: 'cat' },
  { id: '3', name: 'Birds', icon: 'dove' },
  { id: '4', name: 'Rabbits', icon: 'rabbit' },
];

// Mock data for featured pets
const featuredPets = [
  {
    id: '1',
    name: 'Max',
    breed: 'Golden Retriever',
    age: '2 years',
    distance: '2.5 km',
    image: '/api/placeholder/400/300',
  },
  {
    id: '2',
    name: 'Luna',
    breed: 'Persian Cat',
    age: '1 year',
    distance: '3.8 km',
    image: '/api/placeholder/400/300',
  },
  {
    id: '3',
    name: 'Rocky',
    breed: 'German Shepherd',
    age: '3 years',
    distance: '1.2 km',
    image: '/api/placeholder/400/300',
  },
];

// Mock data for nearby pets
const nearbyPets = [
  {
    id: '1',
    name: 'Bella',
    breed: 'Siberian Husky',
    age: '1.5 years',
    distance: '0.8 km',
    image: '/api/placeholder/200/200',
  },
  {
    id: '2',
    name: 'Charlie',
    breed: 'British Shorthair',
    age: '2 years',
    distance: '1.5 km',
    image: '/api/placeholder/200/200',
  },
  {
    id: '3',
    name: 'Daisy',
    breed: 'Poodle',
    age: '4 years',
    distance: '2.1 km',
    image: '/api/placeholder/200/200',
  },
];

export default function HomeScreen() {
  const renderFeaturedPet = ({ item }) => (
    <TouchableOpacity style={styles.featuredCard}>
      <Image
        source={{ uri: item.image }}
        style={styles.featuredImage}
      />
      <View style={styles.featuredInfo}>
        <Text style={styles.petName}>{item.name}</Text>
        <Text style={styles.petBreed}>{item.breed}</Text>
        <View style={styles.petDetails}>
          <Text style={styles.petAge}>{item.age}</Text>
          <View style={styles.distanceContainer}>
            <MaterialIcons name="location-on" size={14} color="#666" />
            <Text style={styles.petDistance}>{item.distance}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderNearbyPet = ({ item }) => (
    <TouchableOpacity style={styles.nearbyCard}>
      <Image
        source={{ uri: item.image }}
        style={styles.nearbyImage}
      />
      <View style={styles.nearbyInfo}>
        <Text style={styles.nearbyName}>{item.name}</Text>
        <Text style={styles.nearbyBreed}>{item.breed}</Text>
        <Text style={styles.nearbyDistance}>{item.distance}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, John! 👋</Text>
            <Text style={styles.subtitle}>Find your perfect companion</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <MaterialIcons name="person" size={24} color="#FFA500" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search pets..."
            placeholderTextColor="#666"
          />
          <TouchableOpacity style={styles.filterButton}>
            <MaterialIcons name="tune" size={24} color="#FFA500" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categories}>
            {categories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryButton}>
                <FontAwesome5 name={category.icon} size={24} color="#FFA500" />
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Pets */}
        <View style={styles.featuredContainer}>
          <Text style={styles.sectionTitle}>Featured Pets</Text>
          <FlatList
            data={featuredPets}
            renderItem={renderFeaturedPet}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredList}
          />
        </View>

        {/* Nearby Pets */}
        <View style={styles.nearbyContainer}>
          <Text style={styles.sectionTitle}>Nearby Pets</Text>
          <View style={styles.nearbyGrid}>
            {nearbyPets.map((pet) => renderNearbyPet({ item: pet }))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5EA',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 25,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  filterButton: {
    padding: 10,
  },
  categoriesContainer: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    width: Dimensions.get('window').width / 4.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
  },
  featuredContainer: {
    marginTop: 25,
    paddingLeft: 20,
  },
  featuredList: {
    paddingRight: 20,
  },
  featuredCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 15,
    width: Dimensions.get('window').width * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuredImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  featuredInfo: {
    padding: 15,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  petBreed: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  petDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  petAge: {
    fontSize: 14,
    color: '#666',
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  petDistance: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  nearbyContainer: {
    marginTop: 25,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  nearbyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  nearbyCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: Dimensions.get('window').width / 2 - 27.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nearbyImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  nearbyInfo: {
    padding: 12,
  },
  nearbyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  nearbyBreed: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  nearbyDistance: {
    fontSize: 12,
    color: '#FFA500',
    marginTop: 4,
  },
});