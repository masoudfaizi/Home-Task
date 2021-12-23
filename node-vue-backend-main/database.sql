-- Create Database homeworks
CREATE DATABASE homeworks;
-- Create user test with password 'TestUser'
CREATE USER test with encrypted password 'TestUser';
-- Grant all privileges to test user on homeworks database
GRANT ALL PRIVILEGES ON DATABASE homeworks TO test;
-- Create Schema
CREATE SCHEMA co2_emission_analytics;

