const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => {
      return context.models['users'].findByPk(id);
    }
  }
};

export default resolvers;