import 'server-only';

export const serverSideFunction = () => {
  console.log(`use multiple libraries,
    use environment variables,
    interact with database,
    process confidential information`);
  return 'server result';
};
