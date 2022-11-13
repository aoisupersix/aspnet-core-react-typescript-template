namespace RazorTypescriptTemplate.Database;

using Microsoft.EntityFrameworkCore;
using RazorTypescriptTemplate.Models;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using var dbContext = new AppDbContext(
            serviceProvider.GetRequiredService<DbContextOptions<AppDbContext>>());

        if (dbContext.Movies.Any())
        {
            return; // DB has been seeded
        }

        PopulateTestData(dbContext);
    }
    public static void PopulateTestData(AppDbContext context)
    {
        context.Movies.AddRange(
            new Movie
            {
                Title = "When Harry Met Sally",
                ReleaseDate = new DateTime(1989, 2, 12),
                Genre = "Romantic Comedy",
                Price = 7.99M
            },
            new Movie
            {
                Title = "Ghostbusters ",
                ReleaseDate = new DateTime(1984, 3, 13),
                Genre = "Comedy",
                Price = 8.99M
            },
            new Movie
            {
                Title = "Ghostbusters 2",
                ReleaseDate = new DateTime(1986, 2, 23),
                Genre = "Comedy",
                Price = 9.99M
            },
            new Movie
            {
                Title = "Rio Bravo",
                ReleaseDate = new DateTime(1959, 4, 15),
                Genre = "Western",
                Price = 3.99M
            });

        context.SaveChanges();
    }
}
