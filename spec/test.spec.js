const scripts = require('../scripts/scripts');

const Activity = scripts.Activity;
const Repository = scripts.Repository;

describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});

describe('Activity', () => {
  let activity;

  beforeEach(() => {
      activity = new Activity({
          id: 1,
          title: 'Test Activity',
          description: 'This is a test activity',
          imgUrl: 'https://example.com/image.jpg'
      });
  });

  it('should create an activity object', () => {
      expect(activity).toBeDefined();
  });

  it('should have the correct properties', () => {
      expect(activity.id).toBe(1);
      expect(activity.title).toBe('Test Activity');
      expect(activity.description).toBe('This is a test activity');
      expect(activity.imgUrl).toBe('https://example.com/image.jpg');
  });
});

describe('Repository', () => {
  let repository;

  beforeEach(() => {
      repository = new Repository();
  });

  it('should create a repository object', () => {
      expect(repository).toBeDefined();
  });

  it('should initialize with an empty activities array', () => {
      expect(repository.activities).toEqual([]);
  });

  it('should add an activity to the repository', () => {
      const activityData = {
          id: 1,
          title: 'Test Activity',
          description: 'This is a test activity',
          imgUrl: 'https://example.com/image.jpg'
      };

      const activity = new Activity(activityData);
      repository.createActivity(activityData);
      
      expect(repository.activities.length).toBe(1);
      expect(repository.activities[0]).toEqual(activity);
  });

  it('should delete an activity from the repository', () => {
      const activityData = {
          id: 1,
          title: 'Test Activity',
          description: 'This is a test activity',
          imgUrl: 'https://example.com/image.jpg'
      };

      const activity = new Activity(activityData);
      repository.createActivity(activityData);
      repository.deleteActivity(activity.id);

      expect(repository.activities.length).toBe(0);
  });
});
