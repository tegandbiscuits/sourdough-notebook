import React from 'react';
import Card from '../components/Card';
import NumberField from '../components/NumberField';

function HomeScreen() {
  return (
    <div className="container">
      <h1 className="text-4xl mt-5 mb-10">
        Sourdough Notebook
      </h1>

      <Card>
        <Card.Body>
          <Card.Title>
            Hydration Calculator
          </Card.Title>

          <form className="gap-3 flex">
            <NumberField
              label="Flour (grams)"
              placeholder="Flour"
              minValue={0}
              formatOptions={{
                style: 'unit',
                unit: 'gram',
              }}
            />

            <NumberField
              label="Water (grams)"
              placeholder="Water"
              minValue={0}
              formatOptions={{
                style: 'unit',
                unit: 'gram',
              }}
            />

            <NumberField
              label="Starter (grams)"
              placeholder="Starter"
              minValue={0}
              formatOptions={{
                style: 'unit',
                unit: 'gram',
              }}
            />

            <NumberField
              label="Salt (grams)"
              placeholder="Starter"
              isReadOnly
              value={10}
              minValue={0}
              formatOptions={{
                style: 'unit',
                unit: 'gram',
              }}
            />
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomeScreen;
