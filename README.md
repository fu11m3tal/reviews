# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## RESTful CRUD API
GET: 
"/api/restaurant/:restaurantName/review/:reviewid"
Example response data: { {
  id ,
  review , 
  overall ,
  food,
  service,
  ambience,
  value,
  noise,
  would_recommend,
  date: Date, 
  restaurant_id,
  user_id,
  user,
  user_initials,
  initials_background,
  location,
  vip,
  total_reviews
} }


POST:
"/api/restaurant/:restaurantName/review/:reviews_id"
Example response data: { reviews_id }

PUT: 
"/api/reviews/:restaurantName"
Example response data: { reviews_id }

DELETE:
"/api/reviews/:restaurantName"
Example response data: { 202 }















CREATE/POST:
Example response data: 
Input: { reviews_id }

READ/GET:
Input: { user_id, restaurant_id, review, overall, food, service, ambience, value, noise, would_recommend, date }

UPDATE/PUT:
Input: { reviews_id, user_id, restaurant_id, review, overall, food, service, ambience, value, noise, would_recommend, date }

DELETE/DELETE: 
Input: { reviews_id, }

