
# UTA Coding Bootcamp Challenge  -- Social Media Backend

## Description

This is my submission for the Social Media Backend challenge in the UTA/EdX Coding Bootcamp. This challenge aimed to create a backend for a social media site using mongoose and mongodb that allows CRUD operations on users and "thoughts".

<a href="https://drive.google.com/file/d/1gj2m3KsNUBuZNRRa0zxiJJiNscvX8Nc2/view?usp=sharing">Link to video demo</a>



## Installation

Run `npm install`
Run `npm start`

## Usage

In Insomnia, the user can view all users and thoughts, or create new ones, with the routes `/api/users` and `/api/thoughts` from their local host. The routes `/api/thoughts/:thoughtId` and `/api/users/:userId` can be used to get, update, or delete a specific user or thought. The route `/api/users/:userId/friends/:friendId` can be used to add and remove friends from a users document. `/api/thoughts/:thoughtId/reactions` and `/api/thoughts/:thoughtId/reactions/:reactionId` can be used to add and delete reactions to thoughts.


## Credits

N/A

## License

This repo uses an MIT License. See above for details.
