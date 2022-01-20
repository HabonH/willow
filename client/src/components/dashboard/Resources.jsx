import Card from "../UI/Card";
import Button from "@mui/material/Button";

const Resources = () => {
  return (
    <Card>
      <div className="resources-container">
        <h1 className="resources-title">Need Help Now?</h1>
        <section className="resources-info-container">
          <article className="resources-info-card">
            <h3 className="resource-info-title">Suicide Prevention Line</h3>
            <div className="resource-info-details">
              <p>Speciality: Suicide Prevention</p>
              <p>Phone: 1-833-456-4566</p>
              <div className="flex-container">
                <Button> Visit Website </Button>
              </div>
            </div>
          </article>
          <article className="resources-info-card">
            <h3 className="resource-info-title">Kids Help Phone</h3>
            <div className="resource-info-details">
              <p>Speciality: Anonymous Care</p>
              <p>Phone: 1-800-668-6868 </p>
              <div className="flex-container">
                <Button> Visit Website </Button>
              </div>
            </div>
          </article>
          <article className="resources-info-card">
            <h3 className="resource-info-title">Good2Talk Helpline</h3>
            <div className="resource-info-details">
              <p>Speciality: Anonymous Care</p>
              <p>Phone: 1-800-668-6868 </p>
              <div className="flex-container">
                <Button> Visit Website </Button>
              </div>
            </div>
          </article>
          <article className="resources-info-card">
            <h3 className="resource-info-title">LGBT Youthline</h3>
            <div className="resource-info-details">
              <p>Speciality: LGBTQ+ Support</p>
              <p>Phone: 647-694-4275</p>
              <div className="flex-container">
                <Button> Visit Website </Button>
              </div>
            </div>
          </article>
          <article className="resources-info-card">
            <h3 className="resource-info-title">Trans LifeLine</h3>
            <div className="resource-info-details">
              <p>Speciality: Transgender people.</p>
              <p>Phone: 1-877-330-6366</p>
              <div className="flex-container">
                <Button> Visit Website </Button>
              </div>
            </div>
          </article>
          <article className="resources-info-card">
            <h3 className="resource-info-title">Alateen</h3>
            <div className="resource-info-details">
              <p>Speciality: Teens & Drugs</p>
              <p>Phone: 1-888-425-2666</p>
              <div className="flex-container">
                <Button> Visit Website </Button>
              </div>
            </div>
          </article>
        </section>
      </div>
    </Card>
  );
};

export default Resources;
