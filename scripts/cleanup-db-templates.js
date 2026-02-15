const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function cleanupDatabase() {
  console.log('🗑️  Cleaning up database templates...');
  
  try {
    const templateCount = await prisma.template.count();
    console.log(`   Found ${templateCount} templates in database`);
    
    if (templateCount > 0) {
      await prisma.template.deleteMany({});
      console.log('   ✅ Deleted all templates');
    } else {
      console.log('   ℹ️  No templates to delete');
    }
    
    console.log('\n✅ Database cleanup complete!');
    console.log('   Templates are now loaded from folders only.');
    
  } catch (error) {
    console.error('❌ Error cleaning up database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

cleanupDatabase();
