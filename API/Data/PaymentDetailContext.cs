using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options):base(options)
        {
            
        }
        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }
}