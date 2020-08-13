const Movie = require("./models/movie");

const resolvers = {
  Query: {
    getMovies: () => Movie.find(),

    getMovie: (_, args) => Movie.findById(args.id),
  },

  Mutation: {
    addMovie: async (_, { name, year, rating }) => {
      const movie = await Movie.create({ name, year, rating });

      return movie;
    },

    updateMovie: async (_, { id, name, year, rating }) => {
      const movie = await Movie.findByIdAndUpdate(
        id,
        { name, year, rating },
        {
          new: true,
        }
      );

      return movie;
    },

    deleteMovie: async (_, { id }) => !!(await Movie.findByIdAndDelete(id)),
  },
};
module.exports = resolvers;
