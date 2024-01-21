import React, { useState } from 'react';
import Card from '../components/Card';
import KeyValueList from '../components/KeyValueList';
import TextField from '../components/TextField';
import calculateHydration from '../utils/calculate-hydration';
import calculateSalt from '../utils/calculate-salt';

function HomeScreen() {
  const [flourGrams, setFlourGrams] = useState<number>(0);
  const [waterGrams, setWaterGrams] = useState<number>(0);
  const [starterGrams, setStarterGrams] = useState<number>(0);

  const hydration = calculateHydration(flourGrams, waterGrams, starterGrams);
  const saltGrams = calculateSalt(flourGrams);

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

          <form className="gap-3 flex" aria-label="Weight Inputs">
            <TextField
              type="number"
              label="Flour (grams)"
              value={flourGrams.toString()}
              onInput={(e) => setFlourGrams(Number(e.currentTarget.value))}
            />

            <TextField
              type="number"
              label="Water (grams)"
              value={waterGrams.toString()}
              onInput={(e) => setWaterGrams(Number(e.currentTarget.value))}
            />

            <TextField
              type="number"
              label="Starter (grams)"
              value={starterGrams.toString()}
              onInput={(e) => setStarterGrams(Number(e.currentTarget.value))}
            />
          </form>
        </Card.Body>
      </Card>

      <Card className="mt-8" variant="info">
        <Card.Body>
          <Card.Title>
            Totals
          </Card.Title>

          <KeyValueList aria-label="Totals">
            <KeyValueList.Item title="Hydration:" value={`${hydration}%`} />
            <KeyValueList.Item title="Flour:" value={`${flourGrams ?? 0}g`} />
            <KeyValueList.Item title="Water:" value={`${waterGrams ?? 0}g`} />
            <KeyValueList.Item title="Starter:" value={`${starterGrams ?? 0}g`} />
            <KeyValueList.Item title="Salt:" value={`${saltGrams}g`} />
          </KeyValueList>
          {/* TODO: note that hydration assumes a 1:1:1 for starter */}
          {/* TODO: note that hydration assumes a 2% salt to flour */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomeScreen;
