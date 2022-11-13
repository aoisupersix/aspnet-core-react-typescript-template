namespace RazorTypescriptTemplate.Database;

using Microsoft.EntityFrameworkCore;
using RazorTypescriptTemplate.Models;

public class AppDbContext : DbContext
{
    public DbSet<Movie> Movies => this.Set<Movie>();

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
}
