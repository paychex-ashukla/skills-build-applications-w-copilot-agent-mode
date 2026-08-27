import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      { username: 'maya', email: 'maya@mergington.edu', displayName: 'Maya Chen', grade: 10 },
      { username: 'jordan', email: 'jordan@mergington.edu', displayName: 'Jordan Rivera', grade: 11 },
      { username: 'sam', email: 'sam@mergington.edu', displayName: 'Sam Okafor', grade: 9 },
    ]);

    await Team.insertMany([
      { name: 'Rocket Runners', motto: 'Small steps, strong finish', members: [users[0]._id, users[1]._id] },
      { name: 'Trail Blazers', motto: 'Move together', members: [users[2]._id] },
    ]);

    const completedAt = new Date('2026-08-20T16:00:00.000Z');
    await Activity.insertMany([
      { user: users[0]._id, type: 'running', durationMinutes: 30, points: 120, completedAt },
      { user: users[1]._id, type: 'strength', durationMinutes: 25, points: 100, completedAt },
      { user: users[2]._id, type: 'walking', durationMinutes: 40, points: 80, completedAt },
    ]);

    await Leaderboard.insertMany([
      { user: users[0]._id, points: 120, rank: 1, period: '2026-08' },
      { user: users[1]._id, points: 100, rank: 2, period: '2026-08' },
      { user: users[2]._id, points: 80, rank: 3, period: '2026-08' },
    ]);

    await Workout.insertMany([
      { title: 'Easy Start Run', activityType: 'running', difficulty: 'beginner', durationMinutes: 20, description: 'A steady run with a relaxed warm-up and cool-down.' },
      { title: 'Power Circuit', activityType: 'strength', difficulty: 'intermediate', durationMinutes: 25, description: 'A full-body circuit using bodyweight movements.' },
      { title: 'Mindful Walk', activityType: 'walking', difficulty: 'beginner', durationMinutes: 30, description: 'A brisk outdoor walk focused on consistent pace.' },
    ]);

    console.log('Database seeding complete: 3 users, 2 teams, 3 activities, 3 leaderboard entries, 3 workouts');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
