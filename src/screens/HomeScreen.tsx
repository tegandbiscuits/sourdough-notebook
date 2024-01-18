import React from 'react';
import Card from '../components/Card';
import NumberField from '../components/NumberField';
import KeyValueList from '../components/KeyValueList';

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
          </form>
        </Card.Body>
      </Card>

      <Card className="mt-8" variant="info">
        <Card.Body>
          <Card.Title>
            Totals
          </Card.Title>

          <KeyValueList>
            <KeyValueList.Item title="Hydration:" value="100g" />
            <KeyValueList.Item title="Flour:" value="100g" />
            <KeyValueList.Item title="Water:" value="100g" />
            <KeyValueList.Item title="Starter:" value="100g" />
            <KeyValueList.Item title="Recommended Salt:" value="10g" />
          </KeyValueList>
          {/* TODO: note that hydration assumes a 1:1:1 for starter */}
          {/* TODO: note that hydration assumes a 2% salt to flour */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomeScreen;
